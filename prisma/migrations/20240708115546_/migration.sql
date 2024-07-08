-- CreateTable
CREATE TABLE "PostTags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PostTags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "posted" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostToPostTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToPostTags_AB_unique" ON "_PostToPostTags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToPostTags_B_index" ON "_PostToPostTags"("B");

-- AddForeignKey
ALTER TABLE "_PostToPostTags" ADD CONSTRAINT "_PostToPostTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToPostTags" ADD CONSTRAINT "_PostToPostTags_B_fkey" FOREIGN KEY ("B") REFERENCES "PostTags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
