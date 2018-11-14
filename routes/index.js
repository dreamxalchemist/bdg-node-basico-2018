const lista = [1,2,3,4];
module.exports = 
[
    {
        method:'GET',
        path:'/lista',
        handler: (req,h) => 
        {
            //return 'hola mundo';
            return {data: lista}
        },    
    },
    {
        method:'POST',
        path:'/lista',
        handler: (req,h) => 
        {
            lista.push(req.payload.data);
            //lista.push(4);
            return {data: lista}
        },    
    },
    {
        method:'GET',
        path:'/lista/{id}',
        handler: (req,h) => 
        {
            return {data: lista[req.params.id]}
        },    
    },
    {
        method:'PUT',
        path:'/lista/{index}',
        handler: (req,h) => 
        {
            lista[req.params.index] = req.payload.data;
            return {data: lista}
        },    
    },
    {
        method:'DELETE',
        path:'/lista/{index}',
        handler: (req,h) => 
        {
            lista.splice(req.params.index,1);
            //lista[req.params.index] = req.payload.data;
            return {data: lista}
        },    
    }
    ]