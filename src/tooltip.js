class Tooltip extends HTMLElement {
    constructor(){
        super();
        this._tooltipContainer;
        this._tooltipText = 'The default text initialized in constructor.';
        this.attachShadow({mode: 'open'});
    }


    connectedCallback() {
        if(this.hasAttribute('text')){
            this._tooltipText = this.getAttribute('text');
        }
        const toolTipIcon = document.createElement('span');
        toolTipIcon.textContent = ' (?)';

        toolTipIcon.addEventListener('mouseenter',this._showTooltip.bind(this));
        toolTipIcon.addEventListener('mouseleave',this._hideTooltip.bind(this));

        this.shadowRoot.appendChild(toolTipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent  = this._tooltipText;
        
        this._tooltipContainer.style.color = 'red';

        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define('uc-tooltip',Tooltip);