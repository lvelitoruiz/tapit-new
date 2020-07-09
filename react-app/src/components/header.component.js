import React from "react";
import UrlBuilderService from "../services/url-builder.service";

export default function Header(props) {

  function setMenu(e) {
    if (e.target.checked) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  function loginCloseMenu() {
    document.getElementById('toggleMenu').click()
  }

  return (

    <header className='border-b border-gray-500 bg-white mb-6'>
      <div className='container md:px-4'>
        <nav role="navigation" className="block sm:hidden">
          <div id="menuToggle" className="absolute block w-full">
            <input type="checkbox" onClick={setMenu} id='toggleMenu' className="block absolute"/>
            <div onClick={loginCloseMenu} className="background"></div>
            <img className='img-menu block' width="26" src='../assets/images/hMenu.svg'/>
            <ul className="fixed w-10/12 p-6 bg-gray-100 pt-2 h-full top-0 border-4 border-white" id="menu">
              <li className="py-2">
                <img className="w-2/3" src={i18next.t("BillLayout.Header.Logo")}/>
              </li>
              <li className="py-2">
                <a
                  className="app-button border-2 border-orange-500 bg-orange-500 text-white w-full text-center p-3 text-sm"
                  href={UrlBuilderService.buildUrl('angular', 'auth/login')}>
                  {i18next.t("BillLayout.Header.LoginText")}
                </a>
              </li>
              <img width="30" className="absolute icon-close" src={i18next.t("BillLayout.Header.IconClose")}/>
            </ul>
          </div>
        </nav>
        <div className="w-full py-2">
          <div className="inline-block text-left w-1/2 mb-0 align-middle">
            <ul>
              <li>
                <img className="main-logo ml-12 sm:ml-0 inline-block align-middle" src={i18next.t("Header.Logo")}
                     style={{width: '70px'}}/>
              </li>
            </ul>
          </div>
          <div className="inline-block text-center md:text-right w-1/2 align-middle text-right pr-2">
            {
              props.user ?
                <ul>
                  <li>
                    {`${props.user.firstName} ${props.user.lastName ? props.user.lastName : ''}`}
                  </li>
                </ul>
                :
                <ul>
                  <li className="inline-block">
                    <a
                      className="app-button border-2 border-orange-500 bg-orange-500 text-white text-center p-3 py-2 text-sm"
                      href={UrlBuilderService.buildUrl('angular', 'auth/login')}>
                      {i18next.t("BillLayout.Header.LoginText")}
                    </a>
                  </li>
                </ul>
            }

          </div>
        </div>
      </div>

    </header>
  )


}
