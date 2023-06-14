import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import './Detailes.css';

const ProductCard = (props) => {

    const { detailes } = props


    const [user] = useAuthState(auth)


    const [likeIcon, setLikeIcon] = useState('far fa-thumbs-up fa-2x');
    const [unLikeIcon, setUnLikeIcon] = useState('far fa-thumbs-down fa-2x');
    const [loveIcon, setLoveIcon] = useState('far fa-heart fa-2x');

    const [reaction, setReaction] = useState({
        react: "",
        favourite: ""
    })


    const [likeColor , setLikeColor] = useState('')
    const [UnLikeColor , setUnLikeColor] = useState('')
    const [loveColor , setLoveColor] = useState('')


    const { data: reactCount = {} } = useQuery({
        queryKey: ['count'],
        queryFn: () => fetch(`https://bird-shop-server-two.vercel.app/react/${detailes?._id}`).then(res => res.json())
    })

    const { data: reactDetailes = [] } = useQuery({
        queryKey: ['detailes'],
        queryFn: () => fetch(`https://bird-shop-server-two.vercel.app/reactDetailes/${user.email}`).then(res => res.json())
    })

    console.log(reactCount);
    console.log(reactDetailes);


    useEffect(() => {


        if (reactDetailes[0]?.favourite === 'Loved') {
            setLoveColor('#FC2947')
            setLoveIcon('fas fa-heart fa-2x')
        }

    }, [setLoveColor])

    useEffect(()=>
    {
        if (reactDetailes[0]?.react === 'Liked') {
            setLikeColor('#1877F2')
            setLikeIcon('fas fa-thumbs-up fa-2x')
        }

    }, [setLikeColor])


    useEffect(()=>
    {
        
        if (reactDetailes[0]?.react === 'Unliked') {
            setUnLikeColor('#393646')
            setUnLikeIcon('fas fa-thumbs-down fa-2x')
        }
    },[setUnLikeColor])









    const onLike = () => {
        setLikeIcon("fas fa-thumbs-up fa-2x")

        setUnLikeIcon('far fa-thumbs-down fa-2x')


        setLikeColor("#1877F2")




        let newReaction = { ...reaction }

        newReaction = {
            react: "Liked"
        }


        setReaction(newReaction)


        let reactionDetailes = {
            birdId: detailes?._id,
            email: user.email,
            react: newReaction.react,
            favourite: newReaction.favourite
        }


        fetch("https://bird-shop-server-two.vercel.app/react",
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reactionDetailes)
            }).then(res => res.json()).then(data => console.log(data))
    }


    const onUnlike = () => {
        setUnLikeIcon('fas fa-thumbs-down fa-2x')
        setLikeIcon("far fa-thumbs-up fa-2x")

        setLoveIcon("far fa-heart fa-2x")


        setUnLikeColor("#393646")



        let newReaction = { ...reaction }

        newReaction = {
            react: "Unliked",
            favourite: ""
        }
        setReaction(newReaction)

        console.log(reaction);

        const reactionDetailes = {
            birdId: detailes?._id,
            email: user.email,
            react: newReaction.react,
            favourite: newReaction.favourite
        }



        fetch("https://bird-shop-server-two.vercel.app/react",
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reactionDetailes)
            }).then(res => res.json()).then(data => console.log(data))
    }


    const onLove = () => {
        setLoveIcon("fas fa-heart fa-2x")

        setUnLikeIcon('far fa-thumbs-down fa-2x')



        setLoveColor("#FC2947")


        let newReaction = { ...reaction }

        newReaction.favourite = "Loved"
        setReaction(newReaction)

        console.log(reaction);

        const reactionDetailes = {
            birdId: detailes?._id,
            email: user.email,
            favourite: newReaction.favourite,
            react: newReaction.react

        }


        fetch("https://bird-shop-server-two.vercel.app/react",
            {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reactionDetailes)
            }).then(res => res.json()).then(data => console.log(data))
    }


    return (
        <div >
            <div className="card  bg-base-100 shadow-xl w-96 ">
                <figure><img src={detailes?.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="name-Container p-2">
                        <div className='my-auto'>
                            <h2 className='text-2xl font-bold text-center '>Name : {detailes?.name} </h2>
                        </div>
                    </div>
                    <div className="scientific-Container p-2">
                        <div className='my-auto'>
                            <h3 className='text-xl font-semibold text-center'> Scientific Name : <span className='sci-name'>{detailes?.scientificName}</span> </h3>
                        </div>
                    </div>
                    <div className='rating-container p-2 '>
                        <div className='text-center'>
                            <h2 className='mb-3 text-xl font-semibold'>Ratings</h2>
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            </div>
                        </div>

                    </div>

                    <div className='react-container p-2 text-center'>
                        <article className='grid grid-cols-3 gap-6'>
                            <div>
                                <button onClick={onLike}>
                                    <span style={{ color: likeColor }}><i className={likeIcon}></i></span>
                                    {/* <span className='text-xl font-semibold'>Like</span> */}
                                </button>
                                <p>{reactCount?.like}</p>
                            </div>
                            <div>
                                <button onClick={onUnlike}>
                                    <span style={{ color: UnLikeColor }}><i className={unLikeIcon}></i></span>
                                    {/* <span className='text-xl font-semibold'>Unlike</span> */}
                                    <p>{reactCount?.unlike}</p>
                                </button>
                            </div>
                            <div>
                                <button onClick={onLove}>
                                    <span style={{ color: loveColor }}><i className={loveIcon}></i></span>{/* 
                                <span className='text-xl font-semibold'>Fabourite</span> */}
                                </button>
                                <p>{reactCount?.fav}</p>
                            </div>

                        </article>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;