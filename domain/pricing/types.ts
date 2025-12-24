export interface PricingPlan {
  id: number
  name: string
  credits: number
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  popular?: boolean
}
