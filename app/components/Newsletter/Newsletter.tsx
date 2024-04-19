"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const handleSubmitnew = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const formData = new FormData(event.target as HTMLFormElement);
  
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        // Email sent successfully
        toast.success("Email sent successfully");
        console.log('Email sent successfully');
        setTimeout(() => {
          window.location.href = "/pickuprequest";
        }, 3000);
      } else {
        toast.error("Something went Wrorng");
        // Error handling
        console.error('Error sending email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
const Newsletter = () => {
    return (
        <div id="join-section" className='-mt-32 relative z-1'>
      <ToastContainer />

            <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div>
                        <h3 className="text-5xl font-bold mb-3">We are for you </h3>
                        <h4 className="text-lg font-medium mb-7">Welcome To
Reachwell Worldwide Express</h4>
                            <form onSubmit={handleSubmitnew}>
                        <div className="flex gap-2">
                            <input type="email" name="email" className="py-4 text-sm w-full text-black bg-white rounded-md pl-4" placeholder="Enter your email" autoComplete="off" />
                            <button type='submit' className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                                Submite
                            </button>
                        </div>
                            </form>
                    </div>

                    {/* COLUMN-2 */}
                    <div className='hidden sm:block'>
                        <div className='float-right -mt-32'>
                            <img src={'/assets/newsletter/Free.svg'} alt="bgimg" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Newsletter;
