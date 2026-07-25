"use client"

import { createContext, useContext } from "react"

export type TermEntry = {
  slug: string
  term: string
  difficulty?: number
  textLv1?: string
  textLv2?: string
  textLv3?: string
}

export type TermMap = Record<string, TermEntry>

const GlossaryTermsContext = createContext<TermMap>({})

export function GlossaryTermsProvider({
  termMap,
  children,
}: {
  termMap: TermMap
  children: React.ReactNode
}) {
  return (
    <GlossaryTermsContext.Provider value={termMap}>
      {children}
    </GlossaryTermsContext.Provider>
  )
}

export function useGlossaryTerms(): TermMap {
  return useContext(GlossaryTermsContext)
}
