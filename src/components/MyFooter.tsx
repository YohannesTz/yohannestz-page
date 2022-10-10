import { Footer } from "flowbite-react"
import { BsTwitter, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs"

export const MyFooter = () => {
    return (
        <div className="my-12 text-left" >
            <Footer bgDark={true} container={true}>
                <div className="w-full">
                    <div>
                        <Footer.Title title="Contact" />
                        <Footer.LinkGroup col={true}>
                            <Footer.Link href="#">
                                Addis Ababa, Kotebe
                            </Footer.Link>
                            <Footer.Link href="#">
                                +251-941393018
                            </Footer.Link>
                            <Footer.Link href="#">
                                yohannes222ethiopia@gmail.com
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between my-5">
                        <Footer.Copyright
                            href="#"
                            by="Yohannes Tezera"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="https://twitter.com/TzYohannes"
                                target="_blank" 
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="https://github.com/YohannesTz"
                                target="_blank" 
                                icon={BsGithub}
                            />
                            <Footer.Icon
                                href="https://www.linkedin.com/in/yohannes-tezera-a79229194/"
                                target="_blank" 
                                icon={BsLinkedin}
                            />
                            <Footer.Icon
                                href="https://t.me/yohan_nes"
                                target = "_blank"
                                icon={BsTelegram}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}