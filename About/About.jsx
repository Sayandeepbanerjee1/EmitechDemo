import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';



const Model = React.lazy(() => import('./Model.jsx'));
const About = () => {
    return (
        <section className="py-4 pt-20">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-2 md:px-0">
                {/* <div className="md:w-1/2 h-[300px] flex justify-center items-center">
                    <img
                        src="https://media.giphy.com/media/2C6v4QD5d3YOO4YhID/giphy.gif?cid=790b7611as26ym4r2bv7zxgqlqf8pnbkf6h5lgz6fyd33i78&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="About-Us"
                        className="max-w-full max-h-[310px] rounded-full"
                    />
                </div> */}
                <div className="md:w-1/2 h-[350px]">
                    <Canvas>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[2, 5, 2]} intensity={1} />
                        <Suspense fallback={null}>
                            <Model modelPath="/scene.gltf" />            
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>


                <div className="md:w-1/2 mb-6 md:mb-0 ml-5">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 mb-6 ">
                    Welcome to Emitech Infosystems Private Limited (EIPL) a leading IT geospatial company at the forefront of innovation in spatial data analysis and visualization. Our team has the expertise of more than 500+ man month experience in IT and geospatial industry. Emitech Infosystems Private Limited is the leading technology startup company with most innovative ideas with the huge variety of product line and services. We are DPIIT certified Start-Up Company from Ministry of Commerce & Industry, Govt. of India, MSME Certified, Govt. of India and ISO 9001: 2015 Certified GIS and Software Development & Services Company. Emitech Infosystems Private Limited headquartered is located in Kolkata with pan India operation and has served business solutions to Government and large corporates in India. We being the leading associate and business partner of ESRI, Trimble, IBM, Indrones, Sophos, Microsoft, Dell, Oracle, Idea Forge & many more propounds principal solutions for Geographical Information System (GIS), Remote Sensing (RS) and all the IT related support to the clients across India.
                    </p>
                </div>
            </div>
        </section>
    )
}


export default About;