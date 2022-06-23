import React from 'react'
import { brandBuilderImageBackground, brandBuilderMain, brandBuilderType, svgg } from './BrandBuilder.module.css'

export default function BrandBuilder() {
  return (
    <div className={brandBuilderMain}>
        <div className={brandBuilderImageBackground}>
            <div className={brandBuilderType}>
            <svg className={svgg}viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" height="348" width="348"><path d="M24 38 12.9 26.85 14.5 25.25 24 34.9 33.55 25.25 35.1 26.85ZM24 23.9 12.9 12.8 14.5 11.25 24 20.85 33.55 11.25 35.1 12.8Z"/></svg>
                <div>
                    CREATE<br />
                    YOUR OWN
                </div>
            <svg className={svgg} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" height="348" width="348"><path d="M24 38 12.9 26.85 14.5 25.25 24 34.9 33.55 25.25 35.1 26.85ZM24 23.9 12.9 12.8 14.5 11.25 24 20.85 33.55 11.25 35.1 12.8Z"/></svg>
            </div>
        </div>
    </div>
  )
}
