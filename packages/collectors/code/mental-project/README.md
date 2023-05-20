# Query examples

- match(f:function{id:'/service.ts/getService/prop1/method2'})<-[r:Relation{relationType:'use'}]-(n) return *
- match(f:function)-->(f2:function) return *
- match(e) return e