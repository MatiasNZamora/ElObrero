import { motion } from "framer-motion";
import { REVIEW } from "../constants";
import xaviour from "../assets/xaviour.jpeg";
import custumer1 from "../assets/customer1.jpeg";
import custumer2 from "../assets/customer2.jpeg";
import custumer3 from "../assets/customer3.jpeg";
import custumer4 from "../assets/customer4.jpeg";

const containerVariants = {
    hidden: { opacity:0 },
    show: {
        opacity:1, transition: { staggerChilden:0.8 }
    }
};

const itemVariants = { 
    hidden: { opacity:0, y:20 },
    show: {
        opacity:1, y:0 , transition: { duration:0.8 }
    }
};

const Review = () => {
    return (
        <section className="container mb-8 mt-4 text-center mx-auto" id="review">
            <motion.div 
                initial="hidden"
                whileInView="show"
                variants={ containerVariants }
                viewport={{ once: true }}
                className="flex flex-col"
            >
                <motion.p 
                    className="mb-10 text-3xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]"
                >
                    { REVIEW.content }
                </motion.p>
                <motion.div 
                    variants={ itemVariants }
                    className="flex item-center justify-center gap-6"
                >
                    <img 
                        src={xaviour}  
                        width={80} 
                        height={80} 
                        alt={REVIEW.name}
                        className="rounded-full border"
                    />
                    <div className="tracking-tighter">
                        <h6> { REVIEW.name } </h6>
                        <p className="text-sm text-neutral-500">
                            { REVIEW.profession }
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div 
                initial="hidden"
                whileInView="show"
                variants={itemVariants}
                viewport={{ once: true }}
                className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
                {
                    [ custumer1, custumer2, custumer3, custumer4 ].map((custumer, i) => (
                        <motion.img 
                            variants={itemVariants}
                            key={i} 
                            src={custumer}
                            alt='customer'
                            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" 
                        />
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Review;