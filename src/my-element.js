import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'


export class MyElement extends LitElement {
  static get properties() {
   
    
  }

  constructor() {
    super()
    console.log('el elemento se esta mostrando')
    
  }

  render() {
    return html`
     
        <div class="info-data">
        <div class="card">
          <div class="head">
            <div>
              <h2>1500</h2>
              <p>Traffic</p>
            </div>
            <i class='bx bx-trending-up icon'></i>
          </div>
          <span class="progress" data-value="40%"></span>
          <span class="label">40%</span>
        </div>
        <div class="card">
          <div class="head">
            <div>
              <h2>234</h2>
              <p>Sales</p>
            </div>
            <i class='bx bx-trending-down icon down'></i>
          </div>
          <span class="progress" data-value="60%"></span>
          <span class="label">60%</span>
        </div>
        <div class="card">
          <div class="head">
            <div>
              <h2>465</h2>
              <p>Pageviews</p>
            </div>
            <i class='bx bx-trending-up icon'></i>
          </div>
          <span class="progress" data-value="30%"></span>
          <span class="label">30%</span>
        </div>
        <div class="card">
          <div class="head">
            <div>
              <h2>235</h2>
              <p>Visitors</p>
            </div>
            <i class='bx bx-trending-up icon'></i>
          </div>
          <span class="progress" data-value="80%"></span>
          <span class="label">80%</span>
        </div>
      </div>
      <div class="data">
        <div class="content-data">
          <div class="head">
            <h3>Sales Report</h3>
          </div>
          <!-- conteido -->
          <h1>Hola Mundo</h1>
        </div>

      </div>
    `
  }

  

  static get styles() {
    return css`
      
    `
  }
}


window.customElements.define('my-element', MyElement)