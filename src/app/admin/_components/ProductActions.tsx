import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { toggleProductAvailability } from "../_actions/products"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

export function ActiveToggleDropdownItem({
    id,
    isAvailableForPurchase,
  }: {
    id: string
    isAvailableForPurchase: boolean
  }) {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    return (
      <DropdownMenuItem
        disabled={isPending}
        onClick={() => {
          startTransition(async () => {
            await toggleProductAvailability(id, !isAvailableForPurchase)
            router.refresh()
          })
        }}
      >
        {isAvailableForPurchase ? "Deactivate" : "Activate"}
      </DropdownMenuItem>
    )
  }