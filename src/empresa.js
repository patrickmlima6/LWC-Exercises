//passo 1, importar a API
import { LightningElement, api } from "lwc";

export default class Empresa extends LightningElement {
  //passo 2 - criar atributos publicos @api
  @api nome;
  @api cnpj;

}