<template>
  <div>
    <nav id="mainNav" :class="{ scrolled: isScrolled }">
      <a href="#home" class="nav-logo">
        <div class="logo-placeholder">KH</div>
        <div class="logo-text">
          Kavic House Recovery
          <span>Recovery House</span>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Our Services</a></li>
        <li class="nav-cta"><a href="#contact">Contact Us</a></li>
      </ul>

      <button class="hamburger" aria-label="Open menu" @click="toggleMobileNav">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div id="mobileNav" class="mobile-nav" :class="{ open: isMobileNavOpen }">
      <a href="#home" @click="closeMobileNav">Home</a>
      <a href="#about" @click="closeMobileNav">About</a>
      <a href="#services" @click="closeMobileNav">Our Services</a>
      <a href="#contact" @click="closeMobileNav">Contact Us</a>
    </div>

    <section id="home">
      <div class="hero-img-wrap">
        <img src="/hero2.png" alt="Kavic House Recovery" class="hero-img">
        <a href="#contact" class="hero-cta">Reach Out Today</a>
      </div>

      <div class="hero-content">
        <div class="hero-eyebrow">
          <span>Nanaimo, BC · Recovery House</span>
        </div>

        <h1 class="hero-title">
          A place to<br>
          <em>heal, grow,</em><br>
          and begin again.
        </h1>

        <p class="hero-subtitle">
          A safe, structured, and compassionate sober living community for those committed to building a life in recovery. You don't have to do this alone.
        </p>

        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">Years of experience<br>serving the community</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">24/7</div>
            <div class="stat-label">Peer support<br>available</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100%</div>
            <div class="stat-label">Committed to<br>your recovery</div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="section-inner">
        <div class="about-grid">
          <div class="about-image-wrapper reveal">
            <div class="about-image-main">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
              </svg>
              <span>Photo of house / team</span>
            </div>
            <div class="about-accent-box">
              <span class="about-accent-num">50+</span>
              <p class="about-accent-text">residents supported on their journey</p>
            </div>
          </div>

          <div class="about-content">
            <div class="section-label reveal"><span>About Us</span></div>
            <h2 class="section-title reveal reveal-d1">Built on<br><em>compassion</em><br>and community.</h2>

            <p class="section-body reveal reveal-d2">
              Kavic House Recovery was built on a simple belief: that every person deserves a real chance at a healthy, meaningful life free from addiction. We're not just a place to stay; we're a structured community where residents find accountability, connection, and hope during one of life's most challenging transitions.
            </p>
            <p class="section-body reveal reveal-d3" style="margin-top:1rem;">
              Our team includes individuals with lived experience in addiction and recovery. We know firsthand what this road looks like: the hard days, the small victories, and everything in between. We're here to walk it with you, one day at a time, with zero judgment and genuine care.
            </p>

            <div class="about-values reveal reveal-d4">
              <div class="value-pill"><div class="value-pill-dot"></div><span>Accountability</span></div>
              <div class="value-pill"><div class="value-pill-dot"></div><span>Peer Support</span></div>
              <div class="value-pill"><div class="value-pill-dot"></div><span>Structure &amp; Routine</span></div>
              <div class="value-pill"><div class="value-pill-dot"></div><span>Dignity &amp; Respect</span></div>
              <div class="value-pill"><div class="value-pill-dot"></div><span>Confidentiality</span></div>
              <div class="value-pill"><div class="value-pill-dot"></div><span>Community</span></div>
            </div>

            <div class="about-quote reveal reveal-d5">
              <p>"Recovery doesn't happen in isolation; it happens in community. We created Kavic House to be the kind of place we wish had existed when we needed it most."</p>
            </div>

            <div class="about-cta reveal reveal-d6">
              <a href="#contact" class="btn-primary">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="section-inner">
        <div class="services-header reveal">
          <div>
            <div class="section-label"><span>Our Services</span></div>
            <h2 class="section-title">Everything you need to<br><em>build a strong foundation.</em></h2>
          </div>
          <div class="services-intro">
            <p>
              Early recovery is about more than staying sober; it's about rebuilding a life. Our programs are designed to give residents the stability, skills, and community they need to move forward with confidence.
            </p>
          </div>
        </div>

        <div class="services-grid">
          <div class="service-card reveal">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Sober Living Housing</h3>
            <p>Safe, clean, and structured homes in Nanaimo where residents share space with peers in recovery. A drug- and alcohol-free environment built on mutual respect, clear expectations, and genuine support.</p>          </div>

          <div class="service-card reveal reveal-d1">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"/>
              </svg>
            </div>
            <h3>Peer Support &amp; Mentorship</h3>
            <p>Connect with staff and housemates who have walked a similar road. When the hard days come, and they do, you'll have people around you who truly understand and who are invested in your success.</p>          </div>

          <div class="service-card reveal reveal-d2">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
            </div>
            <h3>Life Skills Development</h3>
            <p>Addiction often puts everyday life on hold. We help residents rebuild practical skills: managing finances, preparing meals, pursuing employment, and navigating daily responsibilities, so independence becomes real again.</p>          </div>

          <div class="service-card reveal reveal-d1">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              </svg>
            </div>
            <h3>Intake &amp; Case Support</h3>
            <p>Not sure where to start? Our intake process is straightforward and judgment-free. We'll take time to understand your situation and help connect you, or your loved one, with the right level of support without delay.</p>          </div>

          <div class="service-card reveal reveal-d2">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3>Structured Daily Programming</h3>
            <p>Routine is one of the most powerful tools in early recovery. Residents follow a daily structure that includes house meetings, shared responsibilities, curfews, and attendance at recovery groups, creating the rhythm and stability that lasting sobriety requires.</p>          </div>

          <div class="service-card reveal reveal-d3">
            <div class="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
            </div>
            <h3>Family &amp; Community Resources</h3>
            <p>Addiction affects the whole family, not just the individual. We connect residents and their loved ones with Nanaimo-area resources, referrals to treatment providers, and guidance at every stage of the recovery journey.</p>          </div>
        </div>
      </div>
    </section>

    <div class="testimonial-band">
      <blockquote>
        <p>"CJ was the manager at the recovery house I went to when I first left treatment. I was apprehensive about moving into a recovery house, but looking back now it was one of the best suggestions I listened to. Under the guidance of CJ and the 12-step community, having the opportunity to build and expand the skills and lessons I learned in treatment saved my life. CJ is kind, compassionate, and supportive, and he provides honest and thorough feedback. I've since moved out on my own and have continued to build on my foundation and strengthen my recovery capital. CJ is still a good friend, and someone I know I can reach out to when I need help and guidance. If you're serious about your recovery, I highly recommend moving into Kavic Recovery House"</p>
        <cite>Tony, Former Resident, Nanaimo BC</cite>
      </blockquote>
    </div>

    <section id="contact">
      <div class="section-inner">
        <div class="contact-grid">
          <div class="contact-info reveal">
            <div class="section-label"><span>Contact Us</span></div>
            <h2>Ready to take the<br><em>first step?</em></h2>
            <p>
              Reaching out is the hardest part. Whether you're looking for a spot for yourself or a loved one, we're here to answer your questions, no pressure, no judgment.
            </p>

            <div class="contact-details">
              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="contact-detail-text">
                  <strong>Phone</strong>
                  <p>(250) 797-8484</p>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="contact-detail-text">
                  <strong>Email</strong>
                  <p>CJ@kavichouserecovery.ca</p>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="contact-detail-text">
                  <strong>Location</strong>
                  <p>Nanaimo, BC, Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-panel reveal reveal-d2">
            <h3>Send Us a Message</h3>
            <p>We typically respond within 24 hours.</p>

            <form @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="fname">First Name</label>
                  <input id="fname" v-model="form.firstName" type="text" placeholder="Jane" required>
                </div>
                <div class="form-group">
                  <label for="lname">Last Name</label>
                  <input id="lname" v-model="form.lastName" type="text" placeholder="Doe" required>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input id="email" v-model="form.email" type="email" placeholder="jane@example.com" required>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input id="phone" v-model="form.phone" type="tel" placeholder="(250) 000-0000">
              </div>

              <div class="form-group">
                <label for="reason">Reason for Reaching Out</label>
                <select id="reason" v-model="form.reason">
                  <option disabled value="">Please select…</option>
                  <option>Inquiring for myself</option>
                  <option>Inquiring for a family member</option>
                  <option>General information</option>
                  <option>Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" placeholder="Tell us a little about your situation, or any questions you have…"></textarea>
              </div>

              <button type="submit" class="form-submit" :disabled="isSubmitted || isLoading">
                {{ isSubmitted ? 'Message Sent ✓' : isLoading ? 'Sending…' : 'Send Message' }}
              </button>
              <p v-if="isError" class="form-error">Something went wrong. Please try again or email us directly.</p>
              <p class="form-note">Your privacy matters. All inquiries are kept completely confidential.</p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-mark">KH</div>
            <div class="footer-logo-text">Kavic House Recovery</div>
          </div>
          <p>A safe, supportive community for those building a life in recovery. Located in Nanaimo, BC.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Help Now</h4>
          <ul>
            <li><a href="tel:18334560711">Crisis Line BC</a></li>
            <li><a href="https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html" target="_blank" rel="noopener noreferrer">Health Canada Resources</a></li>
            <li><a href="https://www.aa.org" target="_blank" rel="noopener noreferrer">Alcoholics Anonymous (AA.org)</a></li>
            <li><a href="https://www.na.org" target="_blank" rel="noopener noreferrer">Narcotics Anonymous (NA.org)</a></li>
            <li><a href="#contact">Intake Inquiry</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Kavic House Recovery. All rights reserved.</span>
        <span>Made with care in Nanaimo, BC</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const isScrolled = ref(false);
const isMobileNavOpen = ref(false);
let revealObserver: IntersectionObserver | null = null;
const isSubmitted = ref(false);
const isLoading = ref(false);
const isError = ref(false);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reason: '',
  message: ''
});

const onScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value;
};

const closeMobileNav = () => {
  isMobileNavOpen.value = false;
};

const resetForm = () => {
  form.firstName = '';
  form.lastName = '';
  form.email = '';
  form.phone = '';
  form.reason = '';
  form.message = '';
};

const handleSubmit = async () => {
  isError.value = false;
  isLoading.value = true;
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    });
    isSubmitted.value = true;
    setTimeout(() => {
      isSubmitted.value = false;
      resetForm();
    }, 4000);
  } catch {
    isError.value = true;
    setTimeout(() => { isError.value = false; }, 5000);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll);

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObserver?.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver?.observe(el));
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  revealObserver?.disconnect();
});
</script>
