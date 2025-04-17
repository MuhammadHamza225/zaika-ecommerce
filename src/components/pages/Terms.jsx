import React from 'react'
import PageLayout from '../PageLayout'
import PageBanner from '../PageBanner'

const Terms = () => {
  return (
   <PageLayout>
    <PageBanner title='Terms & Conditions'/>
      <section>
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-center">Terms & Conditions</h1>

      <p>
        <strong>Welcome to Zaika!</strong>
      </p>
      <p>
        These terms and conditions outline the rules and regulations for the use of fundorex's Website,
        located at <a href="http://xgenious.com/laravel/fundorex" className="text-blue-600 underline">http://xgenious.com/laravel/fundorex</a>.
      </p>
      <p>
        By accessing this website we assume you accept these terms and conditions. Do not continue to
        use fundorex if you do not agree to take all of the terms and conditions stated on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6">Terminology</h2>
      <p>
        The following terminology applies to these Terms and Conditions, Privacy Statement and
        Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person
        log on this website and compliant to the Company’s terms and conditions...
      </p>

      <h2 className="text-xl font-semibold mt-6">Cookies</h2>
      <p>
        We employ the use of cookies. By accessing fundorex, you agreed to use cookies in agreement
        with the fundorex's Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6">License</h2>
      <p>
        Unless otherwise stated, fundorex and/or its licensors own the intellectual property rights
        for all material on fundorex. All rights are reserved. You may access this from fundorex for
        your own personal use subject to restrictions set in these terms and conditions.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>Republish material from fundorex</li>
        <li>Sell, rent or sub-license material from fundorex</li>
        <li>Reproduce, duplicate or copy material from fundorex</li>
        <li>Redistribute content from fundorex</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Comments</h2>
      <p>
        Parts of this website offer an opportunity for users to post and exchange opinions and
        information. fundorex does not filter, edit, publish or review Comments...
      </p>
      <p>
        fundorex reserves the right to monitor all Comments and remove any which are inappropriate,
        offensive or breach these Terms.
      </p>

      <h3 className="text-lg font-semibold">You warrant and represent that:</h3>
      <ul className="list-disc list-inside ml-4">
        <li>You are entitled to post the Comments and have all necessary licenses;</li>
        <li>The Comments do not invade any intellectual property rights;</li>
        <li>The Comments do not contain defamatory or unlawful material;</li>
        <li>They will not be used for unlawful activity;</li>
        <li>You grant fundorex a license to use, reproduce and edit your Comments.</li>
      </ul>
    </div>
    </section>
   
   </PageLayout>
  )
}

export default Terms
