"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Model } from "@/components/ui/model";

interface AlertModelProperties {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    isLoading: boolean;
}

export const AlertModel: React.FC<AlertModelProperties> = ({
    isOpen,
    onClose,
    onConfirm,
    isLoading
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Model
            title="Are you sure?"
            description="This action is nonreversible"
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={isLoading} variant="destructive" onClick={onConfirm}>Continue</Button>
                <Button disabled={isLoading} variant="outline" onClick={onClose}>Cancel</Button>
            </div>

        </Model>
    );
}