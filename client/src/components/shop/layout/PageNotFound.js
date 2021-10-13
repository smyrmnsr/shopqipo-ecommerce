import React from "react";
import Layout from "./index";

const PageNotFoundComponent = (props) => {
  return (

    <>
     <main className="profile-page">
				<section className="relative block pt-40" style={{ height: "600px" }}>
					<div
					className="absolute top-0 w-full h-full bg-center bg-cover"
					style={{
						backgroundImage:
						"url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/p-200-chim-00051421.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=ad3ee9098117fd1a004e18347f68ee4d')"
					}}
					>
					<span
						id="blackOverlay"
						className="absolute w-full h-full bg-black opacity-50">	
						</span>
					</div>
					
				</section>
				<section className="relative py-8 bg-white ">
					<div className="container px-4 mx-auto ">
					<div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
						<div className="">
						
						<form
						className='flex flex-col'
						method='POST'
						action='#'>
						<div className=''>
						
							<div className='w-full mx-auto rounded shadow-2xl'>
								<div className='px-8 py-4 text-xl text-center text-black border-b border-grey-lighter'>
                Telefon: 021.555.92.70 I Info service: 0771074389
								</div>
								<iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.704397638138!2d26.116924516221!3d44.439225509264126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff31852b0451%3A0xcf1fe5b7b6f8592a!2sBulevardul%20Ferdinand%20I%2016%2C%20Bucure%C8%99ti%20030167!5e0!3m2!1sro!2sro!4v1631808268129!5m2!1sro!2sro" 
                  width="1245" 
                  height="600" 
                  style={{border: "0"}} 
                  allowfullscreen="" 
                  loading="lazy">
                </iframe>
							</div>
						</div>
					</form>
						</div>
					</div>
					</div>
				</section>
				</main>
</>
  );
};

const PageNotFound = (props) => {
  return <Layout children={<PageNotFoundComponent />} />;
};

export default PageNotFound;
