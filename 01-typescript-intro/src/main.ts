import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './topics/05-basic-destructuring.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 Hola mundo
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
