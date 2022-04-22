import '../../Assets/Sass/Base.scss'
import './client.scss'


function DashboradStatistique() {
  return (
      <div  className="Dashboard__Centent__Tables">
        <div class="DashboardMoney__card">
              <div class="DashboardMoney__card__single">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <g />
                    <g>
                      <path
                        d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"
                      />
                      <path
                        d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"
                      />
                      <path
                        d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"
                      />
                      <path
                        d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"
                      />
                    </g>
                  </g>
                </svg>
                <h5 class="card__money">15</h5>
                <span class="card__titre">Today clients</span>
              </div>
              <div class="DashboardMoney__card__single">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <g />
                    <g>
                      <path
                        d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"
                      />
                      <path
                        d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"
                      />
                      <path
                        d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"
                      />
                      <path
                        d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"
                      />
                    </g>
                  </g>
                </svg>
                <h5 class="card__money">77</h5>
                <span class="card__titre">Month clients</span>
              </div>
              <div class="DashboardMoney__card__single">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g><rect fill="none" height="24" width="24" /></g>
                  <g>
                    <g />
                    <g>
                      <path
                        d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z"
                      />
                      <path
                        d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z"
                      />
                      <path
                        d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z"
                      />
                      <path
                        d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z"
                      />
                    </g>
                  </g>
                </svg>
                <h5 class="card__money">3536</h5>
                <span class="card__titre">Total clients</span>
              </div>
        </div>
        <div class="statistique__Allclients__search">
          <input type="text" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </div>
        <div class="statistique__Allclients__clientTable">
          <div class="statistique__Allclients__th">
            <p>Name</p>
            <p>Email</p>
            <p>Phone</p>
            <p>Date réservation</p>
          </div>
          <div class="statistique__Allclients__td">
            <p>faical bahsis</p>
            <p>faical@gmail.com</p>
            <p>+619887328</p>
            <p>18/09/2022</p>
          </div>
          <p class="error">Not found</p>
        </div>
      </div>
  );
}

export default DashboradStatistique;
