import className from 'classnames/bind';
import styles from './BannerSection.module.scss';

let cx = className.bind(styles);


export default function BannerSection({ sectionData }) {
  const { sectionId, sectionClass, bannerImage, bannerTitle, bannerDescription, bannerButton } = sectionData;

//   console.log('sectionData:', sectionData);

  return (
    <section className={cx(['heroBannerSec', sectionClass])}>
        <div className={cx(['heroBannerImage'])}>
            <img src={bannerImage.mediaItemUrl} alt={bannerImage.altText} />
        </div>
        
        <div className={cx(['heroBannerContent'])}>
            <div className="container">
                <div className={cx(['heroBannerHeading'])}>
                    <h1 className={cx(['heading_h1'])} dangerouslySetInnerHTML={{ __html: bannerTitle ?? '' }} />
                </div>

                <div className={cx(['heroBannerText'])}>
                    <div className={cx(['heading_p'])} dangerouslySetInnerHTML={{ __html: bannerDescription ?? '' }} />
                </div>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <path d="M14.8101 23L9 17.2857L11.0112 15.3077L14.8101 19.044L22.9888 11L25 12.978L14.8101 23Z" fill="black"/>
                        </svg>
                        <span>eCommerce Specialists</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <path d="M14.8101 23L9 17.2857L11.0112 15.3077L14.8101 19.044L22.9888 11L25 12.978L14.8101 23Z" fill="black"/>
                        </svg>
                        <span>Focused on Profit</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <circle cx="17" cy="17" r="17" fill="white"/>
                            <path d="M14.8101 23L9 17.2857L11.0112 15.3077L14.8101 19.044L22.9888 11L25 12.978L14.8101 23Z" fill="black"/>
                        </svg>
                        <span>Data-Driven Performance</span>
                    </li>
                </ul>

                <div className={cx(['heroBannerBtn'])}>
                    <a href={bannerButton?.url} target={bannerButton?.target} className={cx(['btn btn-primary'])}>{bannerButton?.title}</a>                                
                </div>
            </div>
        </div>
    </section>

  );
}

