
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://ispl.herokuapp.com/allinfo/");
    const data = await res.json();
    //   console.log(data);

    return {
        props: { ninjas: data }
    };
};

// console.log(data);

const blog = ({ ninjas }) => {
    return (
        <>
            <h1>post</h1>
            {ninjas.map(item => (
                // <div key={item.id}>
                //     <h3>{item.id}</h3>
                // </div>
                <div key={item.id}>
                    <h3>{item.judgementCriteria1}</h3>
                </div>
            )
            )}
        </>
    );
};

export default blog;