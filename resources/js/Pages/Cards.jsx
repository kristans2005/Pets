


export default function Cards() {

    return (
                        <div className='h-auto py-12 px-4'>
                    <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
                        {/* Card 1 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
                                        hover:shadow-2xl 
                                        hover:scale-105
                                        hover:bg-gradient-to-b hover:from-white hover:to-gray-50
                                        dark:hover:from-gray-700 dark:hover:to-gray-600
                                        transition-all duration-300 ease-in-out 
                                        flex flex-col items-center text-center
                                        cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Saikne un uzticība</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Dzīvnieki sniedz beznosacījumu mīlestību un uzticību, un tas ir mūsu pienākums šo uzticību nesagraut.</p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
                                        hover:shadow-2xl 
                                        hover:scale-105
                                        hover:bg-gradient-to-b hover:from-white hover:to-gray-50
                                        dark:hover:from-gray-700 dark:hover:to-gray-600
                                        transition-all duration-300 ease-in-out 
                                        flex flex-col items-center text-center
                                        cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Atbildība</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Mājdzīvnieks ir ģimenes loceklis, kas ir pilnībā atkarīgs no sava saimnieka.</p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
    hover:shadow-2xl 
    hover:scale-105
    hover:bg-gradient-to-b hover:from-white hover:to-gray-50
    dark:hover:from-gray-700 dark:hover:to-gray-600
    transition-all duration-300 ease-in-out 
    flex flex-col items-center text-center
    cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Veselība un drošība</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Pamesti dzīvnieki ir pakļauti bada, slimību un plēsēju uzbrukumiem, kas apdraud viņu dzīvību.</p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
    hover:shadow-2xl 
    hover:scale-105
    hover:bg-gradient-to-b hover:from-white hover:to-gray-50
    dark:hover:from-gray-700 dark:hover:to-gray-600
    transition-all duration-300 ease-in-out 
    flex flex-col items-center text-center
    cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Ietekme uz sabiedrību</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Pamesti mājdzīvnieki bieži kļūst par klaiņojošiem dzīvniekiem, radot sabiedrības drošības riskus.</p>
                        </div>

                        {/* Card 5 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
    hover:shadow-2xl 
    hover:scale-105
    hover:bg-gradient-to-b hover:from-white hover:to-gray-50
    dark:hover:from-gray-700 dark:hover:to-gray-600
    transition-all duration-300 ease-in-out 
    flex flex-col items-center text-center
    cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Morālās vērtības</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Rūpes par mājdzīvnieku atspoguļo mūsu cilvēcību un empātiju pret dzīvo radību.</p>
                        </div>

                        {/* Card 6 */}
                        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg 
    hover:shadow-2xl 
    hover:scale-105
    hover:bg-gradient-to-b hover:from-white hover:to-gray-50
    dark:hover:from-gray-700 dark:hover:to-gray-600
    transition-all duration-300 ease-in-out 
    flex flex-col items-center text-center
    cursor-pointer'>
                            <svg className="w-12 h-12 text-green-600 dark:text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h2 className='text-2xl font-bold text-green-800 dark:text-green-300 mb-4'>Likums</h2>
                            <p className='text-gray-700 dark:text-gray-200'>Dzīvnieku atstāšana novārtā ir likuma pārkāpums.</p>
                        </div>
                    </div>
                </div>
    );
}