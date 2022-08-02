import { LightningElement, api } from "lwc";

export default class Produto extends LightningElement {
  @api nomeproduto;
  @api precoproduto;
}