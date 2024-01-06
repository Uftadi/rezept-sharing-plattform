import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function AddRecipeForm() {
    const {users, 
        setUsers,
        fetchUserData,
        url,
        updateRecipe,
        saveOrder,
        deleteOrder,
        isLoading, setIsLoading,
        isEditingRecipe, setIsEditingRecipe,
        isAddingRecipe, setIsAddingRecipe,
        nameInput, setNameInput,
        produkten, setProdukten,
        steps, setSteps,
        time, setTime,
        difficulty, setDifficulty,
        selectedRecipeId, setSelectedRecipeId,
        selectedUserId, setselectedUserId, image, setImage} = useContext(UserContext);

    return (
        <section className={`${isAddingRecipe ? "block " : "hidden"} mt-[50px] mb-[20px]`}>
            <h4 className='text-[32px] text-center'>My new recipe</h4>
            <form action="" className={`flex flex-col items-center justify-center gap-[10px] mt-[50px]` }>
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px]'>
                    <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Photo*"
                    required
                    className='min-w-[580px] bg-pinkF5 text-black outline-none placeholder:text-black text-[14px] tracking-[1px] uppercase'
                    />
                </div>
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px]'>
                    <input
                        type="text"
                        placeholder="title*"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                        required
                        className='bg-pinkF5 min-w-[580px] text-black outline-none placeholder:text-black text-[14px] tracking-[1px] uppercase'
                        />
                </div>
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px]'>
                    <textarea
                    placeholder="ingredients*"
                    value={produkten}
                    onChange={(e) => setProdukten(e.target.value)}
                    rows="10"
                    cols="20"
                    required
                    className='bg-pinkF5 min-w-[580px] text-black outline-none placeholder:text-black text-[14px] tracking-[1px] uppercase resize-none'
                    />
                </div>
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px]'>
                    <textarea
                        type="text"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Steps*"
                        rows="10"
                        cols="20"
                        required
                        className='min-w-[580px] resize-none bg-pinkF5 text-black outline-none placeholder:text-black text-[14px] tracking-[1px] uppercase'
                        />
                </div>
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px]'>
                    <input
                        type="number"
                        min="0"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="time"
                        required
                        className='bg-pinkF5 text-black outline-none placeholder:text-black text-[14px] tracking-[1px] uppercase'
                        />
                </div>
                {/* <div>
                    <input
                        type="select"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        placeholder="Difficulty"
                    />
                </div> */}
                <div className='py-[16px] bg-pinkF5 pl-[10px] min-w-[580px] mb-[40px]'>
                <select
                    placeholder="Difficulty"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className='bg-pinkF5 text-black outline-none placeholder-black text-[14px] tracking-[1px] uppercase'
                    required
                    >
                    <option value="">Difficulty</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="difficult">difficult</option>
                    
                </select>
                </div>
                <button className='border-[1px] border-black px-[40px] py-[10px] uppercase text-[14px] font-poppins-semi-bold tracking-[1px]' onClick={saveOrder}>{selectedRecipeId ? "update" : "add"} my recipe</button>
            </form>
        </section>
    )
}

export default AddRecipeForm