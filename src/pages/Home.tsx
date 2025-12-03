import { NavLink } from "react-router-dom";
import Footer from "../comp/Footer";

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
                <div className="bg-white py-4 px-25">
                    <p className="text-sm">SGC为全球城市提供独一无二系统化的形象治理与顶级品牌资产解决方案，助力其身份与价值全面升维</p>
                    <div className="flex justify-center text-sm mt-5">
                        <NavLink to="/more" className={'hover:font-bold'}>阅读更多</NavLink>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
    </>
}