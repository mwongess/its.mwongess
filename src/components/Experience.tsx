import Image from "next/image"
import TimeLine from "./TimeLine"

const Experience = () => {
    return (
        <div>
            <TimeLine
                verticalSpacing={24}
                timelineItems={[
                    <div className="flex gap-4">
                        <div className="h-fit">
                            <Image src="/pesira-logo.jpeg" width={40} height={40} alt="Pesira logo" />
                        </div>
                        <div>
                            <div>
                                <p>Frontend Developer</p>
                                <p>Pesira (SBC Australia FT23)</p>
                                <p>May 2024- Present. 1 mo</p>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <p>React.js</p>,
                                <p>Redux.js</p>,
                                <p>HTML</p>,
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>,
                    <div className="flex gap-4">
                        <div className="h-fit">
                            <Image src="/pesira-logo.jpeg" width={40} height={40} alt="Pesira logo" />
                        </div>
                        <div>
                            <div>
                                <p>Frontend Developer</p>
                                <p>Devkenya</p>
                                <p>Sep 2023- March 2024. 7 mos</p>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <p>React.js</p>,
                                <p>Redux.js</p>,
                                <p>HTML</p>,
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>,
                    <div className="flex gap-4">
                        <div className="h-fit">
                            <Image src="/thejitu_com_logo.jpeg" width={40} height={40} alt="Pesira logo" />
                        </div>
                        <div>
                            <div>
                                <p>Full Stack Software Development</p>
                                <p>THEJitu - Attachment</p>
                                <p>July 2022 - Sep 2022 . 3 mos</p>
                            </div>
                            <div className="flex gap-2 mt-6">
                                <p>React.js</p>,
                                <p>Redux.js</p>,
                                <p>HTML</p>,
                                <p>CSS</p>
                            </div>
                        </div>
                    </div>,
                    

                ]} />
        </div>

    )
}

export default Experience