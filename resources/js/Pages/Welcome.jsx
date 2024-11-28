import { Head, Link } from '@inertiajs/react';
import Switcher from './Switcher';
import { useState } from 'react';
import Cards from './Cards';
import Snow from './Snow';
import PuzzleDragDrop from './PuzzleDragDrop';
import Leaderboard from './Leaderbord';

export default function Welcome() {
    const [text, setText] = useState("Ziemassvētku laiks ir brīdis, kad īpaši izjūtam mīlestības, rūpju un dāvināšanas nozīmi. Mājdzīvnieki - mūsu uzticamākie draugi - sniedz mums beznosacījumu mīlestību, bet daudzi no tiem cieš no pamestības un vientulības. Šajos svētkos aicinām ikvienu atcerēties arī par tiem, kuri mūs uztver kā visu savu pasauli! Parūpēsimies, lai neviens dzīvnieks nepaliek novārtā, un kopā radīsim pasauli, kurā mīlestība un rūpes tiek ikkatram, arī četrkājainajiem ģimenes locekļiem.");

    const handleClick = () => {
        setText("Lūdzu adoptē mūs, mēs esam mīļi un nekakāsim aiz dīvāna! 😺");
    };

    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <>
            <Head title="Welcome" />
            <Snow />
            <div className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-x-hidden">
                
                <div className="fixed top-4 right-4 z-10">
                    <Switcher />
                </div>

                <div className="container mx-auto pt-24 px-4">
                    <h1 className="text-6xl font-sans text-green-800 dark:text-green-300 font-bold mb-12 text-center animate-fade-in">
                        Glāb mīļos dzīvnieciņus
                    </h1>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
                    <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 m-6 transform transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/3">
                                <img 
                                    className="rounded-xl w-full h-[400px] object-cover shadow-lg transform transition-all duration-300 hover:shadow-2xl" 
                                    src="/images/cat2.jpg" 
                                    alt="Cat" 
                                />
                            </div>
                            <div className="md:w-2/3 relative">
                                <p className="text-2xl leading-relaxed font-medium text-gray-800 dark:text-gray-100 mb-12 transition-all duration-300">
                                    {text}
                                </p>
                                <div className="absolute bottom-0 right-0">
                                    <button 
                                        onClick={handleClick}
                                        className="h-12 w-[180px] bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg mt-4 flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 hover:shadow-blue-400/50 hover:-translate-y-1"
                                    >
                                        <svg className="w-6 h-6 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <span>AI Summary</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Cards />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-8 text-center">Biežāk uzdotie jautājumi</h2>
                    
                    {[
                        {
                            title: "Ko apsvērt, pirms mājdzīvnieka iegādes?",
                            content: [
                                "Rūpes par dzīvnieku ir ilgtermiņa. Piemēram, suņi un kaķi dzīvo 10 - 20 gadus.",
                                "Mājdzīvniekam nepieciešama ikdienas uzmanība. Ko iesāksiet, ja dosieties ceļojumā?",
                                "Ir nepieciešamas finanses barošanai. Turklāt arī mājdzīvnieki mēdz saslimt, un tiem nav bezmaksas veselības aprūpe."
                            ]
                        },
                        {
                            title: "Ko iesākt, ja tomēr nevarat vairs parūpēties?",
                            content: [
                                "Atcerieties, ka dzīvnieks nav lieta, bet gan dzīva radība!",
                                "Vēlams censties atrast jaunas, mīlošas mājas pie cilvēkiem, kurus pazīstat.",
                                "Konsultējaties ar dzīvnieku patversmēm.",
                                "Nākošos saimniekus vai patversmi informējiet par patieso dzīvnieka veselības stāvokli."
                            ]
                        },
                        {
                            title: "Kā rīkoties, ja pamanat pamestu mājdzīvnieku?",
                            content: [
                                "Pārliecinieties par situāciju - dažkārt saimnieks ir tālāk nekā vajadzētu būt.",
                                "Par prioritāti ņemot savu drošību, mēģiniet dzīvnieku piesaukt un noskaidrot, vai ir kāda norāde par īpašnieku (piemēram, piekariņš pie kaklasiksnas).",
                                "Ja dzīvnieks labprātīgi nenāk pie Jums, necentieties to ķert un piespiest!",
                                "Sazinieties ar tuvāko patversmi vai zvaniet policijai uz 112."
                            ]
                        }
                    ].map((item, index) => (
                        <div key={index} className="mb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <span className="text-lg font-semibold text-green-800 dark:text-green-300">{item.title}</span>
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-600 rounded-b-lg mt-1">
                                    {item.content.map((text, i) => (
                                        <p key={i} className="mb-2 text-gray-700 dark:text-gray-200">{text}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='h-[700px]'>
                    <PuzzleDragDrop />
                </div>
                <div className='pb-[200px]' >
                    <Leaderboard/>
                </div>

                
            </div>
        </>
    );
}
