import { lazy, Suspense, useState } from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'

const Globe = lazy(() => import('./globe.tsx'))

function App() {
	const [showGlobe, setShowGlobe] = useState(false)
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				height: '100%',
				padding: '2rem',
			}}
		>
			<label style={{ marginBottom: '1rem' }}>
				<input
					type="checkbox"
					checked={showGlobe}
					onChange={(e) => setShowGlobe(e.currentTarget.checked)}
				/>
				{' show globe'}
			</label>
			<div style={{ width: 400, height: 400 }}>
				<Suspense fallback={'Loading...'}>
					{showGlobe ? <Globe /> : null}
				</Suspense>
			</div>
		</div>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
