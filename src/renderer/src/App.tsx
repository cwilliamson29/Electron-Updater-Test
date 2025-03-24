import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import pkg from '../../../package.json'

function App(): JSX.Element {
    const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
    const version = pkg.version
    return (
        <>
            <img alt="logo" className="logo" src={electronLogo} />
            <div className="creator">Powered by electron-vite</div>
            <div>
                <h1>Version: {version}</h1>
            </div>
            <div>
                <h1>Version: {version}</h1>
            </div>
            <div>
                <h1>Version: {version}</h1>
            </div>
            <div>
                <h1>Version: {version}</h1>
            </div>
            <p className="tip">
                Please try pressing <code>F12</code> to open the devTool
            </p>
            <div className="actions">
                <div className="action">
                    <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
                        Documentation
                    </a>
                </div>
                <div className="action">
                    <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
                        Send IPC
                    </a>
                </div>
            </div>
            <Versions></Versions>
        </>
    )
}

export default App
