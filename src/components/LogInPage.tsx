import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'

const LogInPage = () => {
    return (
        <>
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <img
                  className="mx-auto h-12 w-auto"
                  src={reactLogo}
                  alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Log in to your account
                </h2>
              </div>
              <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true"/>
                <div className="-space-y-px rounded-md shadow-sm">
                  <div>
                    {/* <label htmlFor="email-address" className="sr-only" >
                      Email address 
                    </label> */}
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address or Username"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className='text-sm'>
                <p>Don't have an account?<span><Link to="signup"><a className=' text-cyan-500  hover:text-cyan-600 transition ease-in-out delay-70 '> Create one here!</a></Link></span></p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-cyan-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 ">
                      Remember me
                    </label>
                  </div>
    
                  <div className="text-sm">
                    <a href="#" className="font-medium text-cyan-500 hover:text-cyan-600">
                      Forgot your password?
                    </a>
                  </div>
                </div>
    
                <div>
                  <Link to="/">
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border bg-cyan-500 text-white hover:bg-cyan-600 transition ease-in-out delay-70 py-2 px-4 text-sm font-medium focus:ring-offset-2"
                    >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                    </span>
                    Sign in
                  </button>
                    </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      )
}
export default LogInPage;