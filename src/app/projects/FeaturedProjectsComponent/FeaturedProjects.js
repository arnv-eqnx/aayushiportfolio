import './FeaturedProjects.css'

export default function FeaturedProjects(){

    const FeaturedProjectsList = {}

    return(
        <div className="pt-8 w-full flex items-start justify-center gap-12">
            <div className="onHoverFeaturedProject flex flex-col items-center justify-center">
                <div className="applyBoxShadow card h-[400px] w-[300px] rounded-xl z-10">
                <div class="card__img"></div>
                    <div class="card__box card__box--c">
				        <span class="card__box-number">02</span>
				        <span class="card__box-tags">#techno #rave</span>
				    </div>
                </div>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mt-4">A* Routing implemention.</h1>
                    <p className="mt-4">
                    This project leverages the A* algorithm to address route optimization challenges in various domains. By implementing and evaluating the algorithm's performance, the project aims to provide practical solutions for real-world route planning problems.
                    </p>
                </div>
                
            </div>
            
            <div className="onHoverFeaturedProject flex flex-col items-center justify-center">
                <div className="applyBoxShadow h-[350px] w-[300px] rounded-xl"></div>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mt-4">Breast Cancer Detection.</h1>
                    <p className="mt-4">
                    This project aims to provide a valuable tool for early breast cancer detection and risk assessment by leveraging logistic regression, a well-established statistical method. Ultimately, it contributes to improving healthcare outcomes through data-driven insights and predictive modeling.
                    </p>
                </div>
                
            </div>

            <div className="onHoverFeaturedProject flex flex-col items-center justify-center">
                <div className="applyBoxShadow h-[400px] w-[300px] rounded-xl"></div>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mt-4">Google Stock Price.</h1>
                    <p className="mt-4">
                    By predicting Google's stock price, this project aims to assist investors and financial professionals in making informed decisions, managing risks, and potentially identifying trading opportunities in the stock market.
                    </p>
                </div>
                
            </div>
            
            <div className="onHoverFeaturedProject flex flex-col items-center justify-center">
                <div className="applyBoxShadow h-[350px] w-[300px] rounded-xl"></div>
                <div className="p-4">
                    <h1 className="text-3xl font-bold mt-4">Heart Disease Predictor.</h1>
                    <p className="mt-4">
                    By predicting heart disease, this data science project aims to assist healthcare professionals in early detection and risk assessment, potentially improving patient outcomes, reducing healthcare costs, and promoting preventive measures for individuals at risk of heart disease.
                    </p>
                </div>
                
            </div>
            
        </div>
    );
}