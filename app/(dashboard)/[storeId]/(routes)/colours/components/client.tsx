"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ColourColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ColoursClientProperties {
    data: ColourColumn[]
}

export const ColoursClient: React.FC<ColoursClientProperties> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading 
                    title={`Colours (${data.length})`}
                    description="Manage colours for your store"    
                />
                <Button onClick={() => router.push(`/${params.storeId}/colours/new`)}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Colour
                </Button>
            </div>
            <Separator />
            <DataTable columns={columns} data={data} searchKey="name" />
            <Heading title="API" description="API Calls for Colours" />
            <Separator />
            <ApiList entityName="colours" entityIdName="colourId" />
        </>
    );
}