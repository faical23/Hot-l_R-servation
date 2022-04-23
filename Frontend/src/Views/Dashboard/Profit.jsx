import '../../Assets/Sass/Base.scss'
import './client.scss'


function DashboradStatistique() {
  return (
      <div  className="Dashboard__Centent__Tables">
        <div class="DashboardMoney__card">
              <div class="DashboardMoney__card__single">
                        <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>

                <h5 class="card__money">15</h5>
                <span class="card__titre">Today Profit</span>
              </div>
              <div class="DashboardMoney__card__single">
                        <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>

                <h5 class="card__money">77</h5>
                <span class="card__titre">Month Profit</span>
              </div>
              <div class="DashboardMoney__card__single">
                <svg id="Layer_1" enable-background="new 0 0 512.012 512.012" height="35" viewBox="0 0 512.012 512.012" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m512.012 253.996v89c-1.056 26.536-38.953 26.516-40 0v-39.51l-63.651 63.652c-3.75 3.751-8.838 5.858-14.142 5.858h-100.923l-133.142 133.142c-7.81 7.811-20.474 7.811-28.284 0-7.811-7.811-7.811-20.474 0-28.284l139-139c3.75-3.751 8.838-5.858 14.142-5.858h100.922l59-59h-42.922c-26.536-1.056-26.516-38.953 0-40h90c11.046 0 20 8.954 20 20zm-20 149c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 0c-11.046 0-20 8.954-20 20v69c1.056 26.536 38.953 26.516 40 0v-69c0-11.046-8.954-20-20-20zm-80 61c-11.046 0-20 8.954-20 20v8c1.056 26.536 38.953 26.516 40 0v-8c0-11.046-8.954-20-20-20zm-41-125c11.046 0 20-8.954 20-20v-12.284c62.696-23.208 47.556-115.437-20.001-116.716-26.592-1.085-26.463-38.759.001-39.857 8.03 0 14.441 4.254 17.59 11.673 4.316 10.167 16.058 14.909 26.226 10.594 10.167-4.316 14.91-16.058 10.594-26.226-6.695-15.771-19.134-27.304-34.41-32.675v-13.51c-1.056-26.536-38.953-26.516-40 0v13.57c-62.606 23.207-47.675 115.147 20.001 116.43 26.443 1.095 26.611 39.042-.001 40.143-7.778 0-15.492-5.075-18.758-12.342-4.528-10.075-16.367-14.571-26.441-10.043-10.075 4.528-14.572 16.366-10.043 26.441 6.826 15.187 19.908 26.854 35.242 32.395v12.406c0 11.047 8.954 20.001 20 20.001zm-69.004 68.475c8.042 0 15.627-4.887 18.678-12.846 3.955-10.313-1.201-21.88-11.515-25.834-174.133-70.315-127.366-325.664 60.844-328.795 82.77 0 153.19 59.068 167.442 140.45 1.905 10.879 12.27 18.155 23.15 16.25s18.156-12.27 16.25-23.15c-8.418-48.07-33.655-92.02-71.063-123.753-134.824-115.236-346.385-17.36-345.781 160.205-1.008 85.365 55.009 166.487 134.839 196.142 2.356.903 4.775 1.331 7.156 1.331z"/></svg>
                <h5 class="card__money">3536</h5>
                <span class="card__titre">Total Profit</span>
              </div>
        </div>

      </div>
  );
}

export default DashboradStatistique;