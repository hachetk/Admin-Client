import { Outlet} from 'react-router-dom';
const AuthLayout = () => {
    return (
        <>
    <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
    <div className="z-20 container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
            <div className="leading-loose">
                <Outlet />

            </div>
        </div>
    </div>
  <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
    <source
      src="https://video.wixstatic.com/video/11062b_f1fbf8b243e942a692e564fac5382513/1080p/mp4/file.mp4"
      type="video/mp4"
    />
   
  </video>
</header> 
        </>
    )
}

export default AuthLayout;