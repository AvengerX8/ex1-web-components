class TituloDinamico extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"}); //Como se fosse a árvore fantasma

        //base do componente = <h1>Alexsander</h1>
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //Estilzar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);