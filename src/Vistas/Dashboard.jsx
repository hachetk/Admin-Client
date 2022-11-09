import { AiOutlineUser } from "react-icons/ai";
import { GiGreenhouse, GiMovementSensor } from "react-icons/gi";
const Dashboard = () => {
    return (
        <div className="px-12">
            <div className="grid lg:grid-cols-3 gap-5">
                
                <div className="bg-white shadow-md rounded-xl px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
                    <div>
                        <span className=" text-5xl leading-none">< AiOutlineUser className="ml-2 text-lime-600"/></span>
                        <p className="mt-2">Usuarios</p>
                        <div className="text-primary mt-5 text-3xl leading-none">18</div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-xl px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
                    <div className="justify-center">
                       
                        <span className="text-primary text-5xl leading-none la la-sun"> <GiGreenhouse className="ml-6 text-lime-600"/></span>
                        <p className="mt-2">Invernaderos</p>
                        <div className="text-primary mt-5 text-3xl leading-none">18</div>
                    </div>
                

                </div>
                <div className="bg-white shadow-md rounded-xl px-4 py-8 flex justify-center items-center text-center lg:transform hover:scale-110 hover:shadow-lg transition-transform duration-200">
                    <div>
                        <span className="text-primary text-5xl leading-none la la-sun"><GiMovementSensor className="ml-2 text-lime-600" /></span>
                        <p className="mt-2">Sensores</p>
                        <div className="text-primary mt-5 text-3xl leading-none">18</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard