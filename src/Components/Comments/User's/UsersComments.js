import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Comment from '../Comment/Comment';


const UsersComments = () => {


    const [user] = useAuthState(auth)


    const url = `https://bird-shop-server-two.vercel.app/reviews?email=${user?.email}`

    const { data : reviews = [] } = useQuery({
        queryKey : ['reviews'],
        queryFn : ()=> fetch(url).then(res=>res.json())
    })
    return (
        <div className='container p-20 ml-auto mr-auto mt-10 mb-10'>
            
            <h1 className='text-2xl font-bold text-center mt-10 mb-5'>{user?.displayName}'s reviews.</h1>
            <article className='grid grid-cols-1 lg:grid-cols-3 gap-16'>

                {reviews.map(review =><Comment key={review._id} reviewData={review}></Comment>)}
            </article> 
        </div>
    );
};

export default UsersComments;