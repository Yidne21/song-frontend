
type methodType='GET'|'POST'|'PUT'|'DELETE'

export type ApiTypes= {
method: methodType;
payload?: any;
params?: any;
route:string;
}