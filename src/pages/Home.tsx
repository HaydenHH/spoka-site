import { NavLink } from "react-router-dom";

export function Home() {
    return <>
        <main className="min-h-screen pt-40">
            <div className="flex justify-center">
                <img className="w-56" src="./logo.svg" alt="" />
            </div>
            <div className="flex justify-center mt-20">
                <p className="pri-text text-xl">From Global Accolades to 11.8 Billion in Impact 从全球荣耀到118亿影响力</p>
            </div>
            <div className="flex justify-center mt-20">
                <div className="bg-white py-4 px-16">
                    <p className="text-sm">SGC为全球城市提供独一无二系统化的形象治理与顶级品牌资产解决方案，助力其身份与价值全面升维</p>
                    <div className="flex justify-center">
                        <NavLink to="/more">more</NavLink>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-30 pri-bg-lite">
                <div>
                    <section className="text-xl text-white m-20">
                        <p>CONTACT US</p>
                        <p>与我们连接</p>
                    </section>
                    <section className="m-20 text-white">
                        <div className="side-info">
                            <span>什柏卡品牌资产集团</span>
                            <span>SPOKA BRAND ASSET GROUP</span>
                        </div>
                        <div className="side-info">
                            <span>北京 ｜上海 ｜新加坡</span>
                            <span>BEIJING / SHANGHAI / SINGAPORE</span>
                        </div>
                                   
                        <div className="side-info">
                            <span>电话｜+86 18321776749</span>
                            <span>Tel｜+86 18321776749</span>
                        </div>
                        <div className="side-info">
                            <span>邮箱｜www.sgcluxe.com</span>
                            <span>Email｜liuyan@gcluxe.com</span>
                        </div>
                          
                              

                    </section>
                </div>
                <div>

                </div>
            </div>
        </main>
    </>
}