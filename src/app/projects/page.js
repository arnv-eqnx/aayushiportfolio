import AllProjects from "./AllProjectsComponent/AllProjects";
import FeaturedProjects from "./FeaturedProjectsComponent/FeaturedProjects";

export default function projects(){
    return(
        <main className="flex min-h-screen flex-col px-16 relative">
            <div className="fake-nav h-[10vh]"></div>
            <section className="featured-projects flex flex-col min-h-screen h-fit">
                <p className="text-6xl font-bold mt-4">Featured projects.</p>
                <FeaturedProjects />
            </section>  
            <section className="min-h-screen h-fit" >
                <p className="text-6xl font-bold mt-8">All projects.</p>
                <p className="text-xl mt-4">This is a blend of personal projects, contributions to open-source initiatives, and experimentation with emerging technologies. Each project is a reflection of my dedication to continuous learning and my desire to make a positive impact on the world through code.</p>
                <AllProjects />
            </section>
        </main>
    );
}
