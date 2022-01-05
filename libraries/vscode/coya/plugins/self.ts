
export default function transformSelfToGlobalThis() {
    const getGlobalFnString = `
      var getGlobalThis = function () {
        if (typeof self !== 'undefined') { return self; }
        if (typeof window !== 'undefined') { return window; }
        if (typeof global !== 'undefined') { return global; }
        throw new Error('unable to locate global object');
      };
    `
    return {
        name: 'rollup-plugin-transform-self-to-globalthis',
        transform: (code: string, id: string) => {
            let newCode = code
            if (id.indexOf('coya-core') > -1) {
                const xReg = /\(self,/
                if (xReg.test(code)) {
                    console.log("te");
                    console.log('[coya-core] replace self keyword')
                    newCode =
                        getGlobalFnString +
                        code.replace(xReg, `(getGlobalThis(),`)
                }
            }
            return {
                code: newCode,
                map: null,
            }
        },
    }
}