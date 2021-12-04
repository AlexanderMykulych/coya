import parse, { ValueNode, PropertyNode } from 'json-to-ast';
import { JsonAstRow } from './WidgetConfig';

export function analizeAst(editorValue: string): JsonAstRow[] {
    const ast = parse(editorValue);

    const analizeChildrens = (parent: string, value: ValueNode, node?: PropertyNode) => {
        if (value.type === 'Object') {
            return value.children
                .flatMap(x => {
                    if (x.type === 'Property') {
                        return analizeChildrens(`${parent}${parent ? '.' : ''}${x.key.value}`, x.value, x);
                    }
                })
                .filter(x => !!x);
        }
        else if (value.type === 'Literal' && node) {
            return {
                path: parent,
                attr: node.key.value,
                value: value.value,
                start: node.loc?.start,
                end: node.loc?.end,
            };
        }
    };
    return analizeChildrens('', ast);
}
