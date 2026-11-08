import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../lib/auth-client';

export  function Login({Mode}) {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const [authMode, setMode] = useState('signin');

const [error, setError] = useState(null);
const [isBusy, setIsBusy] = useState(false);

const navigate = useNavigate();

async function handleSubmit(e) {
e.preventDefault();
setError(null);
setIsBusy(true);

try {
let result;
if (mode === 'signup') {
result = await signUp.email({ email, password, name });
}
else {
result = await signIn.email({ email, password });
}

if (result.error) {
setError(result.error.message ?? 'That did not work. Try again?');
return;
}

navigate('/');

} catch (err) {
setError('Something went wrong. Try again.');
} finally {
setIsBusy(false);
}
}

return (
<div className="mx-auto max-w-md px-6 py-16">
<h1 className="text-3xl font-bold mb-6">
{mode === 'signin' ? 'Sign In' : 'Create an Account'}
</h1>

{error && (
<div className="bg-red-100 text-red-700 p-3 rounded mb-4">
{error}
</div>
)}

<form onSubmit={handleSubmit} className="flex flex-col gap-4">

{mode === 'signup' && (
<div>
<label className="block mb-1 text-sm font-medium">Name</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
required
className="w-full border p-2 rounded"
/>
</div>
)}

<div>
<label className="block mb-1 text-sm font-medium">Email</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
className="w-full border p-2 rounded"
/>
</div>

<div>
<label className="block mb-1 text-sm font-medium">Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
className="w-full border p-2 rounded"
/>
</div>

<button
type="submit"
disabled={isBusy}
className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
>
{isBusy ? 'Loading...' : (mode === 'signin' ? 'Sign In' : 'Sign Up')}
</button>
</form>

<div className="mt-6 text-center">
<button
type="button"
onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
className="text-blue-600 hover:underline"
>
{mode === 'signin'
? "Don't have an account? Sign up"
: 'Already have an account? Sign in'}
</button>
</div>
</div>
);
}