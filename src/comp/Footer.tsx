export default function Footer() {
    return <div className="flex justify-between mt-30 pri-bg-lite">
        <div>

            <section className="text-xl text-slate-200 m-10 my-20">
                <p>CONTACT US</p>
                <p>与我们连接</p>
            </section>

            <section className="m-10 text-slate-200 text-[7pt]">
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

                <div className=" mt-10">
                    银行收款信息（Payment / Bank Details）<br />
                    银行名称Bank Name / 中国工商银行 ICBC <br />
                    账户名Account Name / 上海什柏卡品牌管理有限公司 <br />
                    账号Account Number /1001017809000073256
                </div>

                <div className="mt-10 ">
                    <p>什柏卡品牌资产管理公司</p>
                    <p>We create timeless city identities</p>
                </div>

            </section>
        </div>

        <div className="flex items-end p-10  text-orange-50">
            <section className="w-[400px] h-[300px]  relative">

                <div className="pri-text text-sm">
                    <p className="mt-10">To partner with SGC is to endow your city or enterprise with a world-class presence — and, beyond that, a legacy of enduring value and rare distinction.</p>
                    <p className="mt-5">与 SGC 合作，您的城市或企业不仅拥有世界级形象，更拥有可传承的品牌资产和稀缺身份，让其在全球舞台脱颖而出。</p>
                </div>

                <div className="w-[100px] absolute right-0 bottom-0">
                    <img src="./logoSmall.svg" alt="" />
                </div>

            </section>
        </div>
    </div>
}