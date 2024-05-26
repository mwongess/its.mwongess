import Image from "next/image"
import TimeLine from "./TimeLine"
import { IoDiamondOutline } from "react-icons/io5";

const Experience = () => {
    return (
        <div id="experience">
            <h1 className='font-bold text-3xl mb-8 sm:mb-12'>Experience</h1>
            <div className="flex flex-col sm:flex-row items-center justify-between ">
                <TimeLine
                    verticalSpacing={24}
                    timelineItems={[
                        <div key={0} className="flex gap-4">
                            <div className="h-fit">
                                <Image src="/pesira-logo.jpeg" width={40} height={40} alt="Pesira logo" />
                            </div>
                            <div>
                                <div>
                                    <p className="font-bold">Frontend Developer</p>
                                    <p>Pesira (SBC Australia FT23) - Internship</p>
                                    <p className="text-sm">May 2024- Present. 1 mo</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>React.js</p>,
                                    <p>Redux.js</p>,
                                    <p>HTML</p>,
                                    <p>CSS</p>
                                </div>
                            </div>
                        </div>,
                        <div key={1} className="flex gap-4">
                            <div className="h-fit">
                                <Image src="/default.png" width={40} height={40} alt="Pesira logo" />
                            </div>
                            <div>
                                <div>
                                    <p className="font-bold">Full Stack Software Developer</p>
                                    <p>Devkenya - Freelance</p>
                                    <p className="text-sm">Sep 2023- March 2024. 7 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>Amazon Web Services(AWS)</p>,
                                    <p>Next.js</p>,
                                    <p>HTML</p>,
                                    <p>CSS</p>
                                </div>
                            </div>
                        </div>,
                        <div key={2} className="flex gap-4">
                            <div className="h-fit">
                                <Image src="/thejitu_com_logo.jpeg" width={40} height={40} alt="Pesira logo" />
                            </div>
                            <div>
                                <div>
                                    <p className="font-bold">Full Stack Software Developer</p>
                                    <p>THEJitu - Attachment</p>
                                    <p className="text-sm">July 2022 - Sep 2022 . 3 mos</p>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 mt-6 font-bold">
                                    <p><IoDiamondOutline /></p>
                                    <p>Node.js</p>,
                                    <p>Typescript</p>,
                                    <p>Angular</p>,
                                    <p>Softskills</p>
                                </div>
                            </div>
                        </div>,


                    ]} />
                <div>
                    <Image src="/experience.png" width={400} height={400} alt="Pesira logo" />
                </div>
            </div>

        </div>

    )
}

export default Experience