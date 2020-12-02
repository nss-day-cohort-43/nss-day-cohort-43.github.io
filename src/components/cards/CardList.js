// By Audrey Thomasson

import React, { useEffect, useState } from "react"
import { CardHTML } from "./Card"

export const CardList = ({filteredMates}) => {

return (
    <>  
        {filteredMates.map(mate => {
            return <>

                        <div className="col-md-6 col-lg-4 mb-5">                    
                            <CardHTML key={mate.id} mate={mate} />

                        </div>
                    </>
                })
            }

    </>
)}