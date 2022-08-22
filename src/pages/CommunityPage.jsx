import React, { useEffect } from 'react'
import { Events } from '../components/Events'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Post } from '../components/Post'
import { Seperator } from '../components/Seperator'
import { Sujet } from '../components/Sujet'
import { Vote } from '../components/Vote'
import { useOpen } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'

export const CommunityPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack === "" || pack === "free" || pack === "consumer_pack") {
            navigate("/accueil")
        }
    }, [])

    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"community"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"community"} />
                    </div>
                </div>}
                <div className='sm:pt-16 sm:pl-16 pt-1 pl-1  flex-grow flex flex-col z-40'>
                    <div className='flex flex-col space-y-2'>
                        <span className='header text-5xl'>Bonjour!</span>
                        <span className='text-3xl'>Minassa lab</span>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Evènements à venir</span>
                        <div className='mt-4 flex w-full'>
                            <Events />
                        </div>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Notre prochain sujet</span>
                        <span className='text-gray-500'>C'est le sujet qu'on va enregistrer dans notre podcast prochain</span>
                        <div className='mt-4'>
                            <Sujet />
                        </div>
                    </div>
                    <div className='border-b border-black mt-12'></div>
                    <div className='mt-12'>
                        <Vote name={"Rana Jollanar"} vote_data={"“Nous sommes heureux en Tunisie.”"} />
                    </div>
                    <div className='border-b border-black mt-12'></div>
                    <div className='mt-12'>
                        <Post name={"Kais Saied"} data={"يضيف رمزي، “جميع أشقائي زوجاتهم لا يعملن، فكيف تعمل زوجتي في المستقبل!؟، مهمة العمل تقتصر على الزوج، ومن الناحية الاقتصادية ومساهمة الزوجة في متطلبات الحياة المتعددة، فهذا واجب الزوج وعليه التفكير به جيدا قبل عقد قرانه”. وتواجه العديد من الفتيات مشكلة في تفكير الشباب المقبلين على الزواج، فتراه ناضجا.. متعلما.. مثقفا… لكنه لا يؤيد فكرة عمل الفتاة المتزوجة، يعتقد بأن “شهادة الفتاة شكلية”، معللا ذلك بدورها الأهم في تربية الأبناء وتنشئتهم، وإدارتها لشؤون المنزل، وغيرها من الأسباب التي تقف حجر عثرة في إتمام الزواج أحيانا. وتفكر حينها الفتاة: هل أتنازل عن كل تعبي في سبيل الحصول على “الشهادة” وطموحي وأمنياتي المستقبلية في العمل وفقا لدراستي؟ أم ارضخ لرغبات الشريك وتفكيره في ترك العمل؟."} />
                    </div>
                </div>
            </div>
        </div>
    )
}
