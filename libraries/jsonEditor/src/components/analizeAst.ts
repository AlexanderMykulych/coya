import type { PropertyNode, ValueNode } from 'json-to-ast';
import parse from 'json-to-ast';
import type { AstAnalizingResult } from './WidgetConfig';

export function analizeAst(editorValue: string): AstAnalizingResult {
    const ast = parse(editorValue);

    const analizeChildrens = (parent: string, value: ValueNode, node?: PropertyNode) => {
        if (value.type === 'Object') {
            return [
                {
                    path: parent,
                    type: value.type,
                    start: value.loc?.start,
                    end: value.loc?.end,
                },
                ...value
                    .children
                    .flatMap((x) => {
                        if (x.type === 'Property')
                            return analizeChildrens(`${parent}${parent ? '.' : ''}${x.key.value}`, x.value, x);
                    })
                    .filter(x => !!x),
            ];
        }
        else if (value.type === 'Literal' && node) {
            return {
                path: parent,
                attr: node.key.value,
                value: value.value,
                start: node.loc?.start,
                end: node.loc?.end,
                type: value.type,
            };
        }
        else if (value.type === 'Array') {
            const rows = [];
            if (parent === '') {
                rows.push({
                    path: parent,
                    start: value.loc?.start,
                    end: value.loc?.end,
                    type: value.type,
                });
            }
            return [
                ...rows,
                ...value
                    .children
                    .flatMap((x, index) => {
                        if (x.type === 'Object')
                            return analizeChildrens(`${parent}${parent ? '.' : ''}${index}`, x);
                    })
                    .filter(x => !!x),
            ];
        }
    };
    return {
        ast,
        rows: analizeChildrens('', ast),
    };
}
