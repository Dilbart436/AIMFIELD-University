import { getUrl } from "../../utils/url.js";

const headerMarkup = `
     <!-- Header -->
   <header class="header">
      <div class="container">

         <nav class="nav" aria-label="Primary navigation">

            <a class="nav__brand" href="${getUrl()}">
               <i class="fa-solid fa-graduation-cap nav__logo" aria-hidden="true"></i>
               <span class="nav__brand-text">
                  <span class="nav__brand-name">
                     AIMFIELD
                  </span>
                  <span class="nav__brand-subtitle">
                     UNIVERSITY
                  </span>
               </span>
            </a>

            <button class="nav__toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false"
               aria-controls="primary-navigation">
               <i class="fa-solid fa-bars nav__toggle-icon" aria-hidden="true"></i>
            </button>

            <!-- Links Container -->
            <ul class="nav__links" id="primary-navigation">

               <li class="nav__item">
                  <a class="nav__link" href="${getUrl("pages/about/")}">About</a>
               </li>
               <!-- Departments -->
               <li class="nav__item nav__item--mega">
                  <button class="nav__trigger" type="button" aria-expanded="false" aria-haspopup="true"
                     aria-controls="departments-menu">
                     <span>Departments</span>
                     <i class="fa-solid fa-chevron-down nav__trigger-icon" aria-hidden="true">
                     </i>
                  </button>
                  <!-- Mega-menu -->
                  <div class="mega-menu" id="departments-menu">
                     <div class="mega-menu__inner">

                        <div class="mega-menu__content">
                           <div class="mega-menu__group">
                              <h3 class="mega-menu__heading">
                                 Academic Areas
                              </h3>
                              <!-- Mega-menu-list -->
                              <ul class="mega-menu__list">

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/science/")}">
                                       Science
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/arts/")}">
                                       Arts
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/commerce/")}">
                                       Commerce
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/engineering/")}">
                                       Engineering
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/medical/")}">
                                       Medical
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/departments/law/")}">
                                       Law
                                    </a>
                                 </li>

                              </ul>
                           </div>

                           <a class="mega-menu__cta" href="${getUrl("pages/departments/")}">
                              <span>View All Departments</span>
                              <i class="fa-solid fa-arrow-right  mega-menu__cta-icon" aria-hidden="true">
                              </i>
                           </a>
                        </div>

                        <aside class="mega-menu__featured">
                           <span class="mega-menu__eyebrow">
                              Featured Program
                           </span>

                           <h3 class="mega-menu__title">
                              Explore 50+ Academic Programs
                           </h3>

                           <p class="mega-menu__description">
                              Discover undergraduate and postgraduate opportunities across multiple disciplines.
                           </p>

                           <a class="mega-menu__action" href="${getUrl("pages/departments/")}">
                              <span>Learn More</span>
                              <i class="fa-solid fa-arrow-right mega-menu__action-icon" aria-hidden="true">
                              </i>
                           </a>
                        </aside>

                     </div>
                  </div>
               </li>

               <li class="nav__item nav__item--mega">
                  <button class="nav__trigger" type="button" aria-expanded="false" aria-haspopup="true"
                     aria-controls="campus-life-menu">
                     <span>Campus</span>
                     <i class="fa-solid fa-chevron-down nav__trigger-icon" aria-hidden="true">
                     </i>
                  </button>

                  <div class="mega-menu" id="campus-life-menu">
                     <div class="mega-menu__inner">

                        <div class="mega-menu__content">
                           <div class="mega-menu__group">
                              <h3 class="mega-menu__heading">
                                 Campus Activities
                              </h3>

                              <ul class="mega-menu__list">
                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/campus-life/clubs/")}">
                                       Clubs
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/campus-life/events/")}">
                                       Events
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/campus-life/sports/")}">
                                       Sports
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/campus-life/hostels/")}">
                                       Hostels
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/campus-life/gallery/")}">
                                       Gallery
                                    </a>
                                 </li>
                              </ul>
                           </div>

                           <a class="mega-menu__cta" href="${getUrl("pages/campus-life/")}">
                              <span>Explore Campus Life</span>
                              <i class="fa-solid fa-arrow-right  mega-menu__cta-icon" aria-hidden="true"></i>
                           </a>
                        </div>

                        <aside class="mega-menu__featured">
                           <span class="mega-menu__eyebrow">
                              Student Experience
                           </span>

                           <h3 class="mega-menu__title">
                              Life Beyond The Classroom
                           </h3>

                           <p class="mega-menu__description">
                              Discover clubs, events, sports, and residential experiences that help students grow
                              beyond
                              academics.
                           </p>

                           <a class="mega-menu__action" href="${getUrl("pages/campus-life/")}">
                              <span>Discover More</span>
                              <i class="fa-solid fa-arrow-right mega-menu__action-icon" aria-hidden="true">
                              </i>
                           </a>
                        </aside>
                     </div>
                  </div>
               </li>

               <li class="nav__item nav__item--mega">
                  <button class="nav__trigger" type="button" aria-expanded="false" aria-haspopup="true"
                     aria-controls="admissions-menu">
                     <span>Admissions</span>

                     <i class="fa-solid fa-chevron-down nav__trigger-icon" aria-hidden="true">
                     </i>
                  </button>

                  <div class="mega-menu" id="admissions-menu">
                     <div class="mega-menu__inner">

                        <div class="mega-menu__content">
                           <div class="mega-menu__group">

                              <h3 class="mega-menu__heading">
                                 Admission Resources
                              </h3>

                              <ul class="mega-menu__list">

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/admissions/apply-online/")}">
                                       Apply Online
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/admissions/eligibility-criteria/")}">
                                       Eligibility Criteria
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/admissions/fee-structure/")}">
                                       Fee Structure
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/admissions/scholarships/")}">
                                       Scholarships
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/admissions/important-dates/")}">
                                       Important Dates
                                    </a>
                                 </li>

                              </ul>

                           </div>

                           <a class="mega-menu__cta" href="${getUrl("pages/admissions/")}">
                              <span>Start Your Application</span>
                              <i class="fa-solid fa-arrow-right  mega-menu__cta-icon" aria-hidden="true"></i>
                           </a>
                        </div>

                        <aside class="mega-menu__featured">
                           <span class="mega-menu__eyebrow">
                              Admissions 2026
                           </span>

                           <h3 class="mega-menu__title">
                              Begin Your AIMFIELD Journey
                           </h3>

                           <p class="mega-menu__description">
                              Learn about eligibility, scholarships, and the application process for undergraduate
                              and
                              postgraduate programs.
                           </p>

                           <a class="mega-menu__action" href="${getUrl("pages/admissions/")}">
                              <span>Apply Now</span>
                              <i class="fa-solid fa-arrow-right mega-menu__action-icon" aria-hidden="true"></i>
                           </a>

                        </aside>
                     </div>
                  </div>
               </li>

               <li class="nav__item nav__item--mega">
                  <button class="nav__trigger" type="button" aria-expanded="false" aria-haspopup="true"
                     aria-controls="news-menu">
                     <span>News</span>
                     <i class="fa-solid fa-chevron-down nav__trigger-icon" aria-hidden="true">
                     </i>
                  </button>

                  <div class="mega-menu" id="news-menu">
                     <div class="mega-menu__inner">

                        <div class="mega-menu__content">
                           <div class="mega-menu__group">

                              <h3 class="mega-menu__heading">
                                 Latest Updates
                              </h3>

                              <ul class="mega-menu__list">
                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/news/university-news/")}">
                                       University News
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/news/events-and-seminars/")}">
                                       Events & Seminars
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/news/research-highlights/")}">
                                       Research Highlights
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/news/student-stories/")}">
                                       Student Stories
                                    </a>
                                 </li>

                                 <li class="mega-menu__item">
                                    <a class="mega-menu__link" href="${getUrl("pages/news/press-releases/")}">
                                       Press Releases
                                    </a>
                                 </li>

                              </ul>

                           </div>

                           <a class="mega-menu__cta" href="${getUrl("pages/news/")}">
                              <span>View All News</span>
                              <i class="fa-solid fa-arrow-right  mega-menu__cta-icon" aria-hidden="true"></i>
                           </a>

                        </div>

                        <aside class="mega-menu__featured">
                           <span class="mega-menu__eyebrow">
                              Newsroom
                           </span>

                           <h3 class="mega-menu__title">
                              Stay Updated With AIMFIELD
                           </h3>

                           <p class="mega-menu__description">
                              Latest announcements, achievements, events, and stories from across the university
                              community.
                           </p>

                           <a class="mega-menu__action" href="${getUrl("pages/news/")}">
                              <span>Read Latest News</span>
                              <i class="fa-solid fa-arrow-right mega-menu__action-icon" aria-hidden="true"></i>
                           </a>

                        </aside>

                     </div>

                  </div>

               </li>

               <li class="nav__item">
                  <a class="nav__link" href="${getUrl("pages/contact/")}">Contact</a>
               </li>
               <!-- Preferences -->
               <li class="nav__item nav__item--preferences">
                  <h3 class="nav__preferences-heading">
                     Preferences
                  </h3>
               </li>

               <!-- Dark Mode -->
               <li class="nav__item">
                  <button class="nav__theme-button nav__theme-button--mobile js-theme-toggle" type="button"
                     aria-label="Switch to dark mode" aria-pressed="false">
                     <span class="nav__theme-label">
                        <i class="fa-solid fa-moon nav__theme-icon" aria-hidden="true">
                        </i>
                        <span class="nav__theme-text">Dark Mode</span>
                     </span>

                     <span class="nav__theme-switch" aria-hidden="true">
                        <span class="nav__theme-thumb" aria-hidden="true"></span>
                     </span>
                  </button>
               </li>

               <!-- Mobile Authentication CTA -->
               <li class="nav__item nav__item--auth">
                  <button class="nav__mobile-cta js-auth-trigger" type="button">
                     <i class="fa-solid fa-user" aria-hidden="true"></i>
                     <span>Sign In</span>
                  </button>
               </li>
            </ul>

            <div class="nav__actions">
               <button class="nav__theme-button js-theme-toggle" type="button" aria-label="Switch to dark mode"
                  aria-pressed="false">
                  <i class="fa-solid fa-moon nav__theme-icon" aria-hidden="true"></i>
               </button>

               <button class="nav__cta js-auth-trigger" type="button">
                  <i class="fa-solid fa-user" aria-hidden="true"></i>
                  <span>Sign In</span>
               </button>
            </div>
         </nav>

      </div>
   </header> `;

export function renderHeader() {
   const headerElement = document.querySelector("#site-header");

   if (!headerElement) {
      return;
   }

   // Prevent duplicate rendering
   // if (headerElement.children.length > 0) {
   //     return;
   // }

   if (headerElement.hasChildNodes()) {
      return;
   }

   headerElement.insertAdjacentHTML("afterbegin", headerMarkup);
}