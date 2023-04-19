<link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
<footer class="footer">
    <div class="footer__container">
        <div class="footer__top">
            <div class="company__info">
                <h2 class="company__logo">StressAway</h2>
                <p class="company__description">
                    StressAway is a product that enhances the mood of 
                    a person<br> by recommending stress relief ways based 
                    on the journal<br> written by the person.
                </p>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-facebook-circle-line"></i>
                        </a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                    </li>
                    <li class="footer__list-item">
                        <a href="/" class="footer__list-link">
                            <i class="ri-twitter-line"></i>
                        </a>
                    </li>
                </ul>
                <span class="copyright">&copy;2023 StressAway. All rights reserved.</span>
            </div>

            <div class="foo">
                <h6 class="footer__title">Rion Dsilva</h6>
                <h3 class="contribution1"> Android Developer</h3>
                <ul class="footer__list">
                    <li class="footer__list-item">
                        <a href="https://www.linkedin.com/in/rion-dsilva-043464229/" class="footer__list-link">LinkedIn</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="https://github.com/RionDsilvaCS" class="footer__list-link">Github</a>
                    </li>
                
                </ul>
            </div>

            <div class="foot">
                <h6 class="footer__title">Puneeth Reddy</h6>
                <h3 class="contribution2"> Web Developer</h3>
                <ul class="footer__list2">
                    <li class="footer__list-item">
                        <a href="https://www.linkedin.com/in/puneeth-reddy-75069824b/" class="footer__list-link">LinkedIn</a>
                    </li>
                    <li class="footer__list-item">
                        <a href="https://github.com/puneethx" class="footer__list-link">Github</a>
                    </li>
                    
                </ul>
            </div>

        </div>
    </div>
</footer>

<style>
.foo{
    padding-top:10% ;
}
.foot{
    padding-top:10%;
}

.footer {
    background-color: #151823;
    color: #666873;
    font-family: 'Poppins', sans-serif;
    padding-top: 3%;
    padding-left: 3%;
    padding-right: 1%;
    padding-bottom: 8%;

}
.footer__container {
    max-width: 100%;
    margin: auto;
    padding: 0 1.5%;
}
.contribution1{
    font-size: 100%;
    padding-left: 1%;
}
.contribution2{
    font-size: 100%;
    padding-left: 15%;
}
.footer__top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    row-gap: 2rem;
}
.footer__title {
    font-size: 1.8rem;
    color: #fff;
    font-weight: 500;
    margin-bottom: 1rem;
}
.footer__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.footer__list2 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 25%;
}

.footer__list-item {
    list-style: none;
}
.footer__list-link {
    text-decoration: none;
    color: inherit;
    transition: color .25s;
}
.footer__list-link:hover {
    color: #fff;
}

.company__info {
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    width:fit-content;
    
}
.company__logo {
    color: #ffffff;
    font-size: 180%;
}
.company__info ul {
    flex-direction: row;
}
.copyright {
    margin-top: auto;
    font-size: 120%;
}
@media screen and (min-width: 40em) {
    .company__info {
        grid-column: span 2;
    }
}

/* layout/base.css */

* {
  box-sizing: inherit;
}

.company__description {
    width:fit-content;
}
</style>