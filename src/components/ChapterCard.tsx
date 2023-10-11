"use client"
import React from 'react';
import {Chapter} from ".prisma/client";
import {cn} from "@/lib/utils";
import {useToast} from "@/components/ui/use-toast";
import {Loader2} from "lucide-react";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type Props = {
    chapter: Chapter;
    chapterIndex: number;
}

export type ChapterCardHandler = {
    triggerLoad: () => void;
}

const ChapterCard = React.forwardRef<ChapterCardHandler, Props>(
    ({chapter, chapterIndex}, ref) => {

    const {toast} = useToast();
    const [success, setSuccess] = React.useState<boolean | null>(true);
    const {mutate: getChapterInfo, isLoading} = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/chapter/getInfo', {
                chapterId: chapter.id,
            });
            return response.data;
        },
    });

    return (
        <div
            key={chapter.id}
            className={cn("px-4 py-2 mt-2 rounded flex justify-between", {
                "bg-secondary": success === null,
                "bg-red-500": success === false,
                "bg-green-500": success === true,
            })}
        >
            <h5>{chapter.name}</h5>
            {isLoading && <Loader2 className="animate-spin"/>}
        </div>
    )
});

ChapterCard.displayName = "ChapterCard";

export default ChapterCard;